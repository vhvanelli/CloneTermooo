import React, {useState} from 'react';
import { Container,Input } from './style'
const App = () => {
    const [message, setMessage] = useState('');

    const handleChange = event => {
      const result = event.target.value.replace(/[^a-z]/gi, '');

      setMessage(result.toUpperCase());
    };
    return (
        <Container>
            <Input onChange={handleChange} value={message} type="text" maxLength="5"/>
        </Container>
     );
}
 
export default App;