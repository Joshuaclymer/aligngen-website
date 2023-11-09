import React, { useState } from 'react';

const fontSize = 18
var categories = [
    'Difficulty',
    'Encoding',
    'Pretraining Similarity',
    'Skill', 
    'Context',  
    'Quality',  
    'Unwanted Personas',  
    'Spurious Cues',  
]
var colors = [
    '#267CB5',  
    '#CA4032',  
    '#1E894B',  
    '#936919',  
    '#7F4697',  
    '#C97226',  
    '#17816C',  
    '#647273',  
    '#A33090',  
    '#267CB5',  
    '#CA4032',  
]

var brighter_colors = [
    '#EAF4FF',  
    '#FFF2E2',  
    '#ECFFF4',  
    '#FFFBE9',  
    '#F9ECFF',  
    '#FFEFE0',  
    '#EBFFFB',  
    '#F6FEFF',  
    '#FFEAFC',  
    '#267CB5',  
    '#FFF2E2',  
]

var colorMap = {}
for (var i = 0; i < categories.length; i++) {
   colorMap[categories[i]] = [colors[i], brighter_colors[i]]
}
const Word = ({text, samples, color, left}) => {
  console.log(text)
  const [showTooltip, setShowTooltip] = useState(false);
  var random_sample = samples[Math.floor(Math.random() * samples.length)];
  var fontWeight = showTooltip ? "bold" : 400;
  const goodResponse = Object.keys(random_sample.responses).filter(r => random_sample.responses[r] == 1)[0];
  const worseResponse = Object.keys(random_sample.responses).filter(r => random_sample.responses[r] == 0)[0];
  return (
  <div style={{position: 'relative'}}>
    <span 
      style={{ color: color, fontSize: fontSize, fontWeight: fontWeight}}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {text}
    </span>
    {showTooltip && (
      <div style={{ position: 'absolute', right: left ? '0px' : null, bottom: '100%', width:"40vw", zIndex: "100", backgroundColor: '#fff', border: '1px solid #ddd', padding: '10px', fontSize: '13px', lineHeight: '20px'}}>
        <span style={{fontWeight: "bold"}}>Prompt:</span> {<br />}
        {random_sample.prompt.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {<br />}
          </React.Fragment>
        ))}
        <span style={{fontWeight: "bold"}}>Good Response:</span> {<br />}
        {goodResponse.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {<br />}
          </React.Fragment>
        ))}{<br />}
        <span style={{fontWeight: "bold"}}>Worse Response:</span> {<br />}
        {worseResponse.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {<br />}
          </React.Fragment>
        ))}
      </div>
    )}
  </div>
  );
}

const WordPair = ({ item, colors, left}) => {
  return (
    <div style={{ backgroundColor: colors[1], padding: "10px", display: "flex", maxWidth: '100%', flexWrap: 'wrap', justifyContent: "center", borderRadius: 5, margin: '5px'}}>
      <Word text={item.distributions[0]} samples={item.source_samples} color={colors[0]} left={left}/>
      <span style={{ color: colors[0], fontSize: fontSize}}> → </span>
      <Word text={item.distributions[1]} samples={item.target_samples} color={colors[0]} left={left}/>
    </div>
  );
};

// const WordPair = ({ distribution, colors }) => (
//   <div style={{ backgroundColor: colors[1]}}>
//     <span style={{ color: colors[0]}}>
//       {distribution[0]}
//     </span>
//     <span style={{ color: colors[0]}}> → </span>
//     <span style={{ color: colors[0]}}>
//       {distribution[1]}
//     </span>
//   </div>
// );

const Category = ({ category, items, colors, left}) => (
  <div>
    <div style={{ backgroundColor: colors[0], margin: 5, padding: "10px", display:"flex", justifyContent:"center", alignItems:"center", borderRadius: 5}}>
      <div style={{ color: 'white' , fontSize: fontSize, fontWeight: "bold"}}>{category}</div>
    </div>
    {items.map((item, index) => (
      <WordPair key={index} item={item} colors={colors} left={left}/>
    ))}
  </div>
);

const DataColumn = ({ data, left}) => {
  var categories = groupByCategory(data);
  return (
    <div style={{display:"flex", flexDirection:"column", width:"100%"}}>
    {Object.entries(categories).map(([category, items], index) => {
      const colors = colorMap[category];
      return (
        <Category key={index} category={category} items={items} colors={colors} left={left}/>
      );
    })}
    </div>
  );
};

const groupByCategory = (data) => {
  return data.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});
};

export default DataColumn;

