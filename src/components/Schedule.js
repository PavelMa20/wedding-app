import './Schedule.css';
import ReactCurvedText from 'react-curved-text';

const Schedule = () => {
  return (
    <div className="schedule-wrapper">
      <div className="languages">
        <div style={{ padding: 4 }}>ENG</div>
        <div style={{ padding: 4 }}>RUS</div>
        <div style={{ padding: 4 }}>UKR</div>
        <div style={{ padding: 4 }}>HE</div>
      </div>
      <div>
        <ReactCurvedText
          width={300}
          height={100}
          cx={140}
          cy={80}
          rx={127}
          ry={33}
          startOffset={50}
          reversed={true}
          text="Together with their loving families"
          textProps={{ style: { fontSize: 12 } }}
          textPathProps={null}
          tspanProps={null}
          ellipseProps={null}
          svgProps={null}
        />
      </div>
      <div>
        <div>
          ARE THRILLED TO
        </div>
        <div>
          INVITE YOU TO THEIR
        </div>
      </div>
      <div>
        <div>
          WEDDING
        </div>
        <div>
          SELEBRATION
        </div>
      </div>
      <div>
        <ReactCurvedText
          width={300}
          height={45}
          cx={140}
          cy={67}
          rx={74}
          ry={34}
          startOffset={50}
          reversed={true}
          text="On Saturday"
          textProps={{ style: { fontSize: 12 } }}
          textPathProps={null}
          tspanProps={null}
          ellipseProps={null}
          svgProps={null}
        />
      </div>
      <div>
        16.09.2023
      </div>
      <div>
        at
      </div>
      <div>
        Gorgasali st. 3, Tiflis Palace Hotel,
        Tbilisi, Georgia
      </div>
      <div>
        Get directions:
      </div>
      <div>
        EVENT PROGRAM
      </div>
      <div>
        15:00 Wedding reception
      </div>
      <div>
        16:00 Wine tasting
      </div>
      <div>
        18:00 Wedding ceremony
      </div>
      <div>
        19:00 Dinner
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
          textPathProps={null}
          tspanProps={null}
          ellipseProps={null}
          svgProps={null}
        />
      </div>
          </div>
  );
};

export default Schedule;