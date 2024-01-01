
const App = () => {
  const city=['Dhaka','Khulna','Rajshahi','Barishal']
  return (
    <div>
      <ul>
      {
        city.map((item,i)=>{
          return <li key={i.toString}>{item}</li>

        })
      }
      </ul>
      
    </div>
  );
};

export default App;