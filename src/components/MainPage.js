import './MainPage.css';
import frame from '../frame/Frame 1.jpg'
import left from '../svgs/Left.svg';
import right from '../svgs/Right.svg';
import Schedule from './Schedule';
import ReactCurvedText from 'react-curved-text';

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    width: '20%',
    height: '100%',
  },
  leftImg: {
    marginRight: 'auto',
  },
  rightImg: {
    marginLeft: 'auto',
  },
};

const spanSpace = <span>'    '</span>;


const MainPage = () => {

  return (
    <body class="body">
      <div class="photo">
        <div id="w-node-d5749075-f0f6-2e94-761b-7b369f767dfa-47213ec2" class="img-container">
          <div className="imgResize">
            <img src={frame} loading="lazy" sizes="(max-width: 479px) 316.4771728515625px, (max-width: 767px) 100vw, 468.058837890625px"
              alt="" class="image-2" />
          </div>
        </div>
      </div>
      <div class="front">
        <div id="w-node-_5e4e2b4a-e258-fd6a-958c-b7f68d5ad4ef-47213ec2" class="div-block">
          {/* <div style={{ display: "flex"}}>
            <div class="text-block-4b" style={{padding: 10}} onClick={()=> console.log('kek')} >ENG</div>
            <div class="text-block-4b" style={{ padding: 10 }}>RUS</div>
            <div class="text-block-4b" style={{ padding: 10 }}>UKR</div>
            <div class="text-block-4b" style={{ padding: 10 }}>HE</div>
      </div> */}
          <div>
            <ReactCurvedText
              width={290}
              height={58}
              cx={140}
              cy={60}
              rx={130}
              ry={42}
              startOffset={12}
              reversed={true}
              text="Together with their loving families"
              textProps={{ style: { fontSize: 16, FontFace: "Literata" } }}
              textPathProps={{ "fill": "#374C66" }}
              tspanProps={null}
              ellipseProps={null}
              svgProps={null}
            /></div>
          <div class="text-block-2" >ARE THRILLED TO</div>
          <div class="text-block-2" style={{ paddingBottom: 20 }}>INVITE YOU TO THEIR</div>
          <div class="text-block-3">WEDDING</div>
          <div class="text-block-3" style={{ padding: 30 }}>CELEBRATION</div>
          <div>
            <ReactCurvedText
              width={300}
              height={34}
              cx={145}
              cy={62}
              rx={65}
              ry={40}
              startOffset={38}
              reversed={true}
              text="On Saturday"
              textProps={{ style: { fontSize: 16, FontFace: 'Literata' } }}
              textPathProps={{ "fill": "#374C66" }}
              tspanProps={null}
              ellipseProps={null}
              svgProps={null}
            />
          </div>
          <div class="text-block-5" style={{ padding: 20 }}>16.09.2023</div>
          <div class="text-block-6" style={{ paddingBottom: 5 }}>at</div>
          <div class="text-block-2">  Gorgasali st. 3, Tiflis Palace Hotel,</div>
          <div class="text-block-2">  Tbilisi, Georgia</div>
          <div style={{ paddingTop: 10, paddingBottom: 30 }}>
            <a className="text-block-7"
              href='https://www.google.com/maps/place/Tiflis+Palace/@41.6886009,44.8088994,17z/data=!3m1!4b1!4m9!3m8!1s0x40440cf7a8255555:0xab0384324b9e511!5m2!4m1!1i2!8m2!3d41.6885969!4d44.8114743!16s%2Fg%2F11btmqj7vb'
              target="_blank"
              rel="noreferrer"
            >Get directions</a>
          </div>
          <div class="text-block-1" style={{ paddingBottom: 5 }}>EVENT PROGRAM</div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "baseline", paddingLeft:25 }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "baseline", columnGap: 40 }}>
            <div class="text-block-8">16:00</div>     
             <div class="text-block-8">Reception</div>
             </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "baseline", columnGap: 40 }}>
              <div class="text-block-8">16:20</div>
              <div class="text-block-8">Wine Tasting</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "baseline", columnGap: 40
           }}>
              <div class="text-block-8">18:00</div>
              <div class="text-block-8">Wedding Ceremony</div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "baseline", columnGap: 40 }}>
              <div class="text-block-8">19:00</div>
              <div class="text-block-8">Dinner&Dance</div>
            </div>
          </div>
          <div>
            <ReactCurvedText
              width={300}
              height={70}
              cx={140}
              cy={10}
              rx={74}
              ry={41}
              startOffset={40}
              reversed={false}
              text="Save the Date ❤︎"
              textProps={{ style: { fontSize: 15 } }}
              textPathProps={{ "fill": "#374C66" }}
              tspanProps={null}
              ellipseProps={null}
              svgProps={null}
            />
          </div>
        </div>
      </div>
      <div class="bg">
        <div class="left-desktop"></div>
        <div class="right-desktop"></div>
      </div>
    </body>
  );
};
{/* // <div style={styles.container}>
    //   <img style={{ ...styles.img, ...styles.leftImg }} src={left} />
    //   <Schedule />
    //   <img style={{ ...styles.img, ...styles.rightImg }} src={right} />
    // </div>
    // <div>
    //   <h1>Main Page</h1>
    //   <p>Some text</p>
    // </div> */}


export default MainPage;