// // components/ProgressBar.tsx
// import React, { useState } from 'react';
// import { ProgressBar, Step } from 'react-step-progress-bar';
// import 'react-step-progress-bar/styles.css';
// import styles from './progressBar.module.scss';

// interface ProgressBarProps {
//   percentage: number;
//   steps: { label: string; percentage: number }[];
// }

// const ProgressBarComponent: React.FC = () => {
//   const steps = [
//     { label: 'Friend1', percentage: 10 },
//     { label: 'Friend2', percentage: 20 },
//     { label: 'Friend3', percentage: 30 },
//     { label: 'Friend4', percentage: 40 },
//     { label: 'Friend5', percentage: 50 },
//     { label: 'Friend6', percentage: 60 },
//   ];

//   const [progress, setProgress] = useState(30); // Example progress

//   return (
//     <div>
//       <h1>Progress Bar Example</h1>
//       <div className={styles.progressBarContainer}>
//         <ProgressBar percent={progress} filledBackground="linear-gradient(to right, #fefb72, #f0bb31)">
//           {steps.map((step, index) => (
//             <Step key={index} transition="scale">
//               {({ accomplished }) => (
//                 <div className={`${styles.achievedStep} ${accomplished ? styles.completed : ''}`}>
//                   <div className={styles.circle}>
//                     {accomplished ? <img src="/path/to/check-icon.svg" alt="Completed" /> : `${step.percentage}%`}
//                   </div>
//                   <div className={styles.label}>{step.label}</div>
//                 </div>
//               )}
//             </Step>
//           ))}
//         </ProgressBar>
//       </div>
//     </div>
//   );
// };

// export default ProgressBarComponent;

// // components/progressBar.module.scss
// .progressBarContainer {
//   width: 100%;
//   padding: 10px;
// }

// .achievedStep {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   transition: color 0.3s ease;
// }

// .circle {
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background: #ccc;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 14px;
//   color: #fff;
//   margin-bottom: 5px;
// }

// .completed {
//   background: #f0bb31;
// }

// .label {
//   font-size: 12px;
//   text-align: center;
//   margin-top: 5px;
// }
