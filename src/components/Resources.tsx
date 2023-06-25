import { Grid} from "@mui/material";
import '../app/globals.scss'
import BasicCard from "@/components/Card";


const Resource = () => {
    return ( 
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
               sx={{mb:2}}>
                   <h1>Resources</h1>

                    <Grid item xs={8}> <BasicCard /> </Grid>
               </Grid>
           
             
            
           </Grid>
     );
}
 
export default Resource;