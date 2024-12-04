import React from 'react';
import SvgLines from 'react-mt-svg-lines';
import styles from './EE.module.css';

const EE: React.FC = () => {
  return (
    <div className={styles.container}>
    <SvgLines
    animate={true}
    duration={5000}
    stagger={25}
    fade={true}
    playback={"infinite alternate-reverse both" as any} // TypeScript override
    timing="ease-in-out"
    >
        <svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.1447 19.5041L31.6678 14.9642C32.1186 14.5133 32.8521 14.5133 33.3029 14.9642L42.4714 24.1127C42.9298 24.5713 43.6633 24.5637 44.1141 24.1127L48.6907 19.5194C49.1415 19.0684 49.1415 18.3271 48.6907 17.8762L33.1195 2.3382C32.6611 1.88727 31.9276 1.88727 31.4768 2.3382L2.34382 31.5492C1.88539 32.0078 1.88539 32.7415 2.34382 33.1925L17.915 48.7228C18.3735 49.1814 19.1069 49.1737 19.5577 48.7228L24.1343 44.1371C24.5851 43.6785 24.5851 42.9448 24.1343 42.4938L14.9658 33.3453C14.515 32.8867 14.515 32.153 14.9658 31.7021L19.489 27.1699C19.9397 26.719 20.6809 26.719 21.1317 27.1699L28.1609 34.186C28.6116 34.637 29.3528 34.637 29.8036 34.186L34.1739 29.799C34.6247 29.3481 34.6247 28.6144 34.1739 28.1558L27.1447 21.1473C26.6939 20.6887 26.6939 19.955 27.1447 19.5041Z" />
        <path d="M50.5244 42.8225L55.0476 38.2826C55.506 37.8317 55.506 37.098 55.0399 36.6394L45.8714 27.4985C45.4206 27.0476 45.4206 26.3062 45.8714 25.8553L50.448 21.2619C50.8988 20.811 51.6323 20.811 52.0907 21.2619L67.6619 36.7846C68.1127 37.2355 68.1127 37.9769 67.6619 38.4278L38.5442 67.6618C38.0858 68.1127 37.3523 68.1127 36.9015 67.6618L21.3227 52.1315C20.8719 51.6806 20.8719 50.9392 21.3227 50.4883L25.8993 45.8949C26.3501 45.444 27.0836 45.444 27.542 45.8949L36.7105 55.0358C37.1689 55.4944 37.9024 55.4867 38.3532 55.0358L42.8763 50.4959C43.3271 50.0373 43.3271 49.3036 42.8687 48.8527L35.8395 41.8442C35.3887 41.3933 35.3887 40.6595 35.8395 40.201L40.2098 35.814C40.6606 35.363 41.3941 35.363 41.8525 35.814L48.8817 42.8225C49.3402 43.281 50.0736 43.2734 50.5244 42.8225Z" />
        </svg>
    </SvgLines>
    </div>
  );
};

export default EE;