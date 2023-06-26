
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function Collage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ImageList sx={{ width: '100%', height: isMobile ? 'auto' : 450 }}>
      {itemData.map((item) => (
         <ImageListItem key={item.img}>
         <div style={{ width: '90%', height: '90%', display: 'block' }}>
           <a
             href={item.link}
             target="_blank"
             rel="noopener noreferrer"
             style={{ display: 'block', width: '100%', height: '100%' }}
           >
             <img
               src={`${item.img}?w=248&fit=crop&auto=format`}
               srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
               alt={item.title}
               loading="lazy"
               style={{
                borderRadius: 10,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              className="hover-image"
             />
           </a>
         </div>
         <ImageListItemBar
            title={item.title}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}


const itemData = [
  {
    img: 'https://sandbox-uploads.imgix.net/u/1687815590-7273328cc138a4006a0075871926c61c?w=600',
    title: 'Arts and Crafts',
    link: 'https://www.happinessishomemade.net/quick-easy-kids-crafts-anyone-can-make/'
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Articles from Parents',
    link: 'https://www.attainaba.com/aba-blog-archives/beginners-guide-for-parents/',
  },
  {
    img: 'https://sandbox-uploads.imgix.net/u/1687815700-57a8d45d6851fba9d58a74ec3764bcf6?w=600',
    title: 'ABA News',
    link: "https://www.appliedbehavioranalysisedu.org/category/news-and-events/",
  },
  {
    img: 'https://sandbox-uploads.imgix.net/u/1687815855-01af76c691c52ebc821b4aaf5b62fcda?w=600',
    title: 'Misc',
    link: 'https://www.psychologytoday.com/us/therapy-types/applied-behavior-analysis',
  }
];