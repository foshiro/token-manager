import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';
import { Button, Footer, Navbar, Page } from 'decentraland-ui'

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
      <div className="Page-story-container">
          <Navbar activePage="marketplace" />
          <Page>
            <Button primary>CONNECT</Button>
          </Page>
          <Footer />
      </div>
  );
}
