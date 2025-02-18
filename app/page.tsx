import ClickSpark from './src/Animations/ClickSpark/ClickSpark';
import FlyingPosters from './src/Animations/FlyingAnimation/FlayingAnim';
import InfiniteMenu from './src/Animations/Menu/Menu';

export default function Home() {
  const items = [
    'https://picsum.photos/500/500?grayscale', 
    'https://picsum.photos/600/600?grayscale', 
    'https://picsum.photos/400/400?grayscale'
  ];
  const itemsMenu = [
    {
      image: 'https://picsum.photos/300/300?grayscale',
      link: 'https://picsum.photos/300/300?grayscale',
      title: 'Item 1',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/400/400?grayscale',
      link: '/blog/2',
      title: 'Item 2',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/500/500?grayscale',
      link: '/blog/2',
      title: 'Item 3',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/600/600?grayscale',
      link: '/blog/2',
      title: 'Item 4',
      description: 'This is pretty cool, right?'
    }
  ];
  return (
   <>
    <div className="bg-white h-screen w-screen relative overflow-hidden">
    <FlyingPosters items={items}/>
    <ClickSpark
    sparkColor='#99999'
    sparkSize={10}
    sparkRadius={15}
    sparkCount={8}
    duration={400}
  />
 
    <InfiniteMenu items={itemsMenu}/>
  </div>
     </>
  );
}
