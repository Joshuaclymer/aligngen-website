import DataColumn from './DataColumn';
import React from 'react';
import data from './all.json';

function Data() {
  var column_one = [
      'Skill', 
      'Quality',  
      'Encoding',
  ]
  var column_two = [
      'Pretraining Similarity',
      'Difficulty',  
      'Context',
  ]
  var column_three = [
      'Unwanted Personas',  
      'Spurious Cues',  
  ]
  const filter_data = (categories) => {
    var filtered_data = data.filter(function (el) {
      return categories.includes(el.category);
    });
    return filtered_data;
  }
  const column_one_data = filter_data(column_one);
  const column_two_data = filter_data(column_two);
  const column_three_data = filter_data(column_three);

  return (
    <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginBottom: '10vh'}}>
      <h2 class="section__title">All datasets</h2>
      <h2 style={{fontSize: 20, fontWeight:600, color:'gray', marginBottom: '35px'}}>(Hover over text to view samples)</h2>
      <div style={{display:'flex', justifyContent: 'center', width: '100%'}}>
      <DataColumn data={column_one_data} left={false}/>
      <DataColumn data={column_two_data} left={false}/>
      <DataColumn data={column_three_data} left={true}/>
      </div>
    </div>
  );
}

export default Data;

// import React, { useEffect, useState } from 'react';
// import myPageHtml from './data_visualization.html';

// function Data() {
//   const [pageHtml, setPageHtml] = useState('');

//   useEffect(() => {
//     // Load the HTML content (e.g., using an HTTP request or other method)
//     // For simplicity, we'll set the content directly from the imported file here.
//     setPageHtml(myPageHtml);
//   }, []);

//   return (
//     <div>
//       {/* Use the imported HTML content */}
//       <div dangerouslySetInnerHTML={{ __html: pageHtml }} />
//     </div>
//   );
// }

// export default Data;

// // import React from 'react';
// // import DataVisualization from "./data_visualization.html";

// // function Data() {
// //   // This is the HTML content you want to insert from the HTML file
// //   const htmlContent = DataVisualization;

// //   return (
// //     <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
// //   );
// // }

// // export default Data;