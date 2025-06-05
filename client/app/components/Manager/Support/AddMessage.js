import React, { useState } from 'react';

import Input from '../../Common/Input';
import Button from '../../Common/Button';

const AddMessage = props => {
  const { onSubmit } = props;
  const [message, setMessage] = useState('');

  const handleOnSubmit = e => {
    e.preventDefault();
    if (!message.trim()) {
      return alert('Por favor escribe un mensaje.');
    }
    onSubmit(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <Input
        autoComplete='off'
        type={'text'}
        name={'message'}
        placeholder='Escribe un mensaje'
        value={message}
        onInputChange={(_, value) => setMessage(value)}
        inlineElement={<SendButton disabled={!message} />}
      />
    </form>
  );
};

const SendButton = ({ disabled }) => (
  <Button type='submit' disabled={disabled} variant='primary' text='Enviar' />
);

export default AddMessage;
