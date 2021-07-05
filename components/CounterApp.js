import React, {useState} from 'react';
import PropType from 'prop-types';
import { Text, View, Button } from 'react-native';

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
     <View>  
        <Text>CounterApp</Text>
        <Text>{ counter }</Text>
        <Button title="-"  onPress={ handleSus }/>
        <Button title="Reset"  onPress={ handleReset }/>
        <Button title="+" onPress={ handleAdd }/>
     </View>
  
   );
} 


CounterApp.propType = {
    value: PropType.number
}

export default CounterApp;