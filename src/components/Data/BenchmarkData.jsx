import DataGrid from './DataGrid.jsx';
import react from 'react';
import data from './genies.json';

function benchmarkdata() {
  return (
    <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', width:'100%', marginBottom: '10vh'}}>
      <h2 class="section__title">Genies Benchmark Datasets</h2>
      <h2 style={{fontSize: 20, fontWeight:600, color:'gray', marginBottom: '35px'}}>(Hover over text to view samples)</h2>
      <div style={{display:'flex', justifyContent: 'center', width:'100%'}}>
        <DataGrid data={data} />
      </div>
    </div>
  );
}

export default benchmarkdata;

// import react, { useeffect, usestate } from 'react';
// import mypagehtml from './data_visualization.html';

// function data() {
//   const [pagehtml, setpagehtml] = usestate('');

//   useeffect(() => {
//     // load the html content (e.g., using an http request or other method)
//     // for simplicity, we'll set the content directly from the imported file here.
//     setpagehtml(mypagehtml);
//   }, []);

//   return (
//     <div>
//       {/* use the imported html content */}
//       <div dangerouslysetinnerhtml={{ __html: pagehtml }} />
//     </div>
//   );
// }

// export default data;

// // import react from 'react';
// // import datavisualization from "./data_visualization.html";

// // function data() {
// //   // this is the html content you want to insert from the html file
// //   const htmlcontent = datavisualization;

// //   return (
// //     <div dangerouslysetinnerhtml={{ __html: htmlcontent }} />
// //   );
// // }

// // export default data;