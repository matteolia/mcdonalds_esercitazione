import React, {useState, useEffect} from 'react'; 

export default () => {

  const [date, setDate] = useState(new Date());

  useEffect( () => {
     const timerId = setInterval(() => {
         setDate(new Date());
         document.title = `Sono le ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}  `;
     }, 1000); 

     return () => clearInterval(timerId)
  })

  return (
    <div>
      Oggi è {date.toDateString()} {date.getSeconds()}
    </div>
  );
};