import React, {useState} from 'react';
import PropType from 'prop-types';
import { Title } from 'react-native-paper';
import { Text, Fragment } from 'react-native';

  const CounterApp = ({value = 0}) => { 
   const [ counter, setCounter ] = useState(value);

  const handleAdd = (e) => {
      setCounter(counter+1); 
  } 

  const handleSus = (e) => {
    if(counter > 0){ 
      setCounter(counter-1); 
    } else {
      handleReset(e) 
    }
}

  const handleReset = (e) => {
  setCounter(value); 
} 

   return( 
     <Fragment style = {styles.container}>  
        <Title>CounterApp</Title>
        <Text>{ counter }</Text>
        <Button title="-" disabled onPress={ handleSus }/>
        <Button title="Reset" disabled onPress={ handleReset }/>
        <Button title="+" disabled onPress={ handleAdd }/>
     </Fragment>
  
   );
} 


CounterApp.propType = {
    value: PropType.number
}

export default CounterApp;
