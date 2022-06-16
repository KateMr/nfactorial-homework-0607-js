import './App.css';
import img1 from './img/img1.jpeg'
import img2 from './img/img2.jpeg'
import img3 from './img/img3.jpeg'
import img4 from './img/img4.jpeg'
import img5 from './img/img5.jpeg'

function App() {
// const mainDivs = [
//   {
//     className: "img",
//     // style: 'backgroundImage: "./img/img1.jpeg"'
//   },
//   {
//     className: "img",
//     style: {
//       backgroundImage: './img/img2.jpeg',
//     },
//   }
//   {
//     className: "img",
//     style: {
//       backgroundImage: './img/img3.jpeg',
//     },
//   }
//   {
//     className: "img",
//     style: {
//       backgroundImage: './img/img4.jpeg',
//     },
//   }
//   {
//     className: "img",
//     style: {
//       backgroundImage: './img/img5.jpeg',
//     },
//   }
// ]
const divText = [
  {
    key: '1',
    backgroundImage: `url(${img1})`,
    label: 'HEY',
  },
  {
    key: '2',
    backgroundImage: `url(${img2})`,
    label: 'LET\'S'
  },
  {
    key: '3',
    backgroundImage: `url(${img3})`,
    label: 'GIVE'
  },
  {
    key: '4',
    backgroundImage: `url(${img4})`,
    label: 'ALL'
  },
  {
    key: '5',
    backgroundImage: `url(${img5})`,
    label: 'YOU CAN'
  },
]

 return (
  <div className="imgContainer">

    {divText.map((item) => (
      <div className="img" style={{backgroundImage: `${item.backgroundImage}`}} key={item.key}>
        <p className="text">
          {item.label}
        </p>
      </div>
    ))}

  </div>
 );
}

export default App;
