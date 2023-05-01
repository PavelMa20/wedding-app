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

const MainPage = () => {

  return (
    <body class="body">
  <div class="photo">
        <div id="w-node-d5749075-f0f6-2e94-761b-7b369f767dfa-47213ec2" class="img-container">
          <div className="imgResize">
          <img src={frame} loading="lazy" sizes="(max-width: 479px) 316.4771728515625px, (max-width: 767px) 100vw, 468.058837890625px" 
    alt="" class="image-2"/>
          </div>
    </div>
  </div>
  <div class="front">
    <div id="w-node-_5e4e2b4a-e258-fd6a-958c-b7f68d5ad4ef-47213ec2" class="div-block">
      <div style={{ display: "flex"}}>
            <div class="text-block-4b" style={{padding: 10}} onClick={()=> console.log('kek')} >ENG</div>
            <div class="text-block-4b" style={{ padding: 10 }}>RUS</div>
            <div class="text-block-4b" style={{ padding: 10 }}>UKR</div>
            <div class="text-block-4b" style={{ padding: 10 }}>HE</div>
      </div>
          <div>
            <ReactCurvedText
              width={300}
              height={40}
              cx={147}
              cy={60}
              rx={124}
              ry={42}
              startOffset={43}
              reversed={true}
              text="Together with their loving families"
              textProps={{ style: { fontSize: 12, FontFace: "Literata" } }}
              textPathProps={{ "fill": "#374C66" }}
              tspanProps={null}
              ellipseProps={null}
              svgProps={null}
            /></div>
          <div class="text-block-2" >ARE THRILLED TO</div>
          <div class="text-block-2" style={{paddingBottom: 20}}>INVITE YOU TO THEIR</div>
          <div class="text-block-3">WEDDING</div>
          <div class="text-block-3" style={{ padding: 30 }}>CELEBRATION</div>
          <div>
            <ReactCurvedText
              width={300}
              height={32}
              cx={145}
              cy={62}
              rx={65}
              ry={40}
              startOffset={50}
              reversed={true}
              text="On Saturday"
              textProps={{ style: { fontSize: 12, FontFace: "Literata" } }}
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
          <div style={{ padding: 20 }}>
            <a className="text-block-7" 
            href='https://www.google.com/maps/place/Tiflis+Palace/@41.6886009,44.8088994,17z/data=!3m1!4b1!4m9!3m8!1s0x40440cf7a8255555:0xab0384324b9e511!5m2!4m1!1i2!8m2!3d41.6885969!4d44.8114743!16s%2Fg%2F11btmqj7vb'
              target="_blank"
              rel="noreferrer"
            >Get directions:</a>
          </div>
          <div class="text-block-1" style={{ paddingBottom: 5 }}>EVENT PROGRAM</div>
          <div style={{display:"flex", flexDirection:"column", alignItems:"baseline"}}>
            <div class="text-block-2">{"15:00"  + " Wedding reception"}</div>
          <div class="text-block-8">16:00  Wine tasting</div>
          <div class="text-block-8">18:00  Wedding ceremony</div>
          <div class="text-block-8">19:00  Dinner</div>
          </div>
          <div>
            <ReactCurvedText
              width={300}
              height={40}
              cx={140}
              cy={-5}
              rx={74}
              ry={41}
              startOffset={50}
              reversed={false}
              text="save the date"
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