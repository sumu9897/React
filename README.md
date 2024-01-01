# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

short hand if else in jmx file
```bash
const App = () => {

  let marks=90;
  return (
    <div>
      {
      marks>80?
      <h1>Brilliant Result</h1>
      :
      <h1>Average result</h1>
      }
    </div>
  );
};

export default App;
```

Immediately-Invoked

```bash
const App = () => {
  let marks=33;
  return (
    <div>
      {(
        ()=>{
          if(marks>=80 && marks<100) {
            return <h1>A+</h1>
          }
          else if(marks>=70 && marks<80){
            return <h1>A</h1>
          }
          else if(marks>=60 && marks<70){
            return <h1>A-</h1>
          }
          else if(marks>=50 && marks<60){
            return <h1>A-</h1>
          }
          else if(marks>=40 && marks<50){
            return <h1>A-</h1>
          }
          else{
            return <h1>Fail</h1>
          }
      }
      )()}
      
    </div>
  );
};

export default App;
```