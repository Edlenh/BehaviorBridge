
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
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
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
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Articles from Parents',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://sandbox-uploads.imgix.net/u/1687815700-57a8d45d6851fba9d58a74ec3764bcf6?w=600',
    title: 'ABA News',
    author: '@helloimnik',
  },
  {
    img: 'https://sandbox-uploads.imgix.net/u/1687815855-01af76c691c52ebc821b4aaf5b62fcda?w=600',
    title: 'Misc',
    author: '@nolanissac',
  }
];