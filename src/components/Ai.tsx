"use client";
import * as React from "react";
import useState from 'react-usestateref'
import {Grid} from "@mui/material"
import Box from '@mui/material/Box';
import Iconsvg from "../../public/behaviors.svg"
import Image from "next/image";

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
    {from == Creator.Bot &&(
        <div>
        <h1>Some quick advice</h1>
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
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
        <Grid item xs={8}>
        <h1 className="blockTitle">Target Behavior</h1></Grid>
        <Grid item xs={4}><Image
            style={{
                maxWidth: "400px",
                width: "100%",
                height: "auto",
                margin: "auto",
            }}
            src={Iconsvg}
            alt= "people talking"/>
            </Grid>
            <Grid item xs={12} >
                <p>Enter Target Behavior Below</p>
            <input className="aiInput"
            value={input}
            onChange={(ev: any) => setInput(ev.target.value)}
            type="text"
            // placeholder="Aggression, Noncompliance"
            autoFocus
            disabled={disabled}
            onKeyDown={(ev)=> handleKeyDown(ev)}
            />
             </Grid>
                </Grid>
            </Box>     
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
<Grid item xs={10}>
            <ChatInput onSend={(input)=> callApi(input)} disabled={loading}/>
       

      
            {messages.map((msg: MessageProps)=>(
                <ChatMessage key={msg.key} text={msg.text} from={msg.from} />
            ))}
          
          </Grid>
        </Grid>
        </>
    )
}


