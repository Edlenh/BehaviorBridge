"use client";
import * as React from "react";
import useState from 'react-usestateref'
import {Grid} from "@mui/material"

enum Creator {
    Me= 0,
    Bot = 1
}

interface MessageProps{ 
    text: string,
    from : Creator,
    key :number 
}

interface InputProps {
    onSend: (input: string) => void;
    disabled: boolean
}

const ChatMessage=({text, from} : MessageProps )=>{
    return(
        <>
        {from == Creator.Me &&(
            <div>
                <h1>This is from me</h1>
                <p>{text}</p>
            </div>
        
    )}
    {from == Creator.Bot &&(
        <div>
        <h1>This is from bot</h1>
        <p>{text}</p>
        </div>
    )}
    </>
    );
}

const ChatInput = ({onSend, disabled}: InputProps) =>{
    const [input, setInput] = useState('');

    const sendInput = ()=>{
        onSend(input);
        setInput('');
    };

    const handleKeyDown = (event : any) =>{
        if(event.keyCode===13){
            sendInput()
        }
    };

    return(
        <Grid item className="parentResource" sx={{p:4, border: 3,
            borderColor:"#00B4D8",
            borderRadius: 10,
            borderTopLeftRadius: 1,
            borderBottomRightRadius: 25,
            borderBottom: 12,
             }}>
                    <Grid 
  direction="row"
  container 
  item
  justifyContent="space-between"
  alignItems="center"
  justifyItems="center"
></Grid> 
<h1>Quick Advice</h1>
<Grid item xs={8}>
            <input 
            value={input}
            onChange={(ev: any) => setInput(ev.target.value)}
            type="text"
            placeholder="What Behavior are you struggling with?"
            disabled={disabled}
            onKeyDown={(ev)=> handleKeyDown(ev)}
            />
    </Grid>
        </Grid>
    )
};

export default function AiChat(){
    const [ messages, setMessages, messagesRef] = useState<MessageProps[]>([]);
    const [loading, setLoading] = useState(false)

    const callApi = async(input: string)=>{
        setLoading(true);

        const myMessage: MessageProps={
            text: input,
            from: Creator.Me,
            key: new Date().getTime()
        };

        setMessages([...messagesRef.current, myMessage]);
        const response = await fetch('/api/generate-answer',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: input
            })
        }).then((response) => response.json());
        setLoading(false);

        if(response.text){
            const botMessage: MessageProps = {
                text: response.text,
                from: Creator.Bot,
                key: new Date().getTime()
            };
            setMessages([...messagesRef.current, botMessage])

        }else{
            
        }

    };

    return(
        <>
        <div>
            <ChatInput onSend={(input)=> callApi(input)} disabled={loading} />
        </div>

        <div>
            {messages.map((msg: MessageProps)=>(
                <ChatMessage key={msg.key} text={msg.text} from={msg.from} />
            ))}
          
        </div>
        </>
    )
}


