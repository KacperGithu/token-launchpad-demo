import React, { useState } from 'react';

export default function TokenCreator() {
  const [name, setName] = useState('');
  const [ticker, setTicker] = useState('');
  const [supply, setSupply] = useState('');
  const [output, setOutput] = useState('');

  const handleCreate = () => {
    if (!name || !ticker || !supply) {
      setOutput('Please fill all fields.');
      return;
    }
    setOutput(`🚀 Created token $${ticker} with name "${name}" and total supply of ${supply}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Create Your Meme Token</h2>
      <input placeholder="Token Name" value={name} onChange={e => setName(e.target.value)} /><br/>
      <input placeholder="Ticker" value={ticker} onChange={e => setTicker(e.target.value)} /><br/>
      <input placeholder="Total Supply" value={supply} onChange={e => setSupply(e.target.value)} /><br/>
      <button onClick={handleCreate}>Deploy</button>
      <pre>{output}</pre>
    </div>
  );
}