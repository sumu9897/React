# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- short hand if else in jmx file
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