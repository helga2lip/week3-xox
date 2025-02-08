import { useState } from 'react';
import { GameLayout } from './GameLayout'

export function Game() {
  const [field, setField] = useState(
    [
      'X', '', '',
      '', 'X', '',
      'O', 'O', 'X',
    ]
  ); 

  return (
    <GameLayout field={field}/>

  )
}
