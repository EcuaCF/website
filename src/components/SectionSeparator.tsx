// components/SectionSeparator.jsx
import styles from './SectionSeparator.module.css';

const SectionSeparator = ({ 
  type = 'wave', 
  color = 'white', 
  flip = false, 
  className = '' 
}) => {
  const SeparatorSVG = () => {
    switch (type) {
      case 'wave':
        return (
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            className={`${styles.separator} ${flip ? styles.flip : ''} ${className}`}
            style={{ ['--separator-color' as string]: color } as React.CSSProperties}
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        );
      case 'peak':
        return (
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            className={`${styles.separator} ${flip ? styles.flip : ''} ${className}`}
            style={{ ['--separator-color' as string]: color }}
          >
            <path d="M0 0L1200 120H0V0Z"></path>
          </svg>
        );
      case 'soundwave':
        return (
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            className={`${styles.separator} ${flip ? styles.flip : ''} ${className}`}
            style={{ ['--separator-color' as string]: color }}
          >
            <path d="M0 80Q200 20 400 80T800 40T1200 80V120H0Z"></path>
          </svg>
        );
      case 'curved':
        return (
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            className={`${styles.separator} ${flip ? styles.flip : ''} ${className}`}
            style={{ ['--separator-color' as string]: color }}
          >
            <path d="M0 120C300 0 600 0 900 120S1500 0 1800 120H0Z"></path>
          </svg>
        );
      default:
        return (
          <div className={`${styles.lineSeparator} ${className}`} style={{ backgroundColor: color }}></div>
        );
    }
  };

  return <SeparatorSVG />;
};

export default SectionSeparator;