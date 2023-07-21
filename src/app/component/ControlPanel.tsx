import React, { useState } from 'react';

export function ControlPanel() {
  const [nickname, setNickname] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Никнейм"
        value={nickname}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNickname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Текст"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      />
      <button>Отправить</button>
    </form>
  );
}
