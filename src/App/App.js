import styles from './styles.module.css';

import { Meme } from "../Meme/Meme";
import { Switch, Route } from 'react-router-dom';
import { MemeGenerated } from "../MemeGenerated/MemeGenerated";

export const App = () => {
  return (
    <div className={styles.alignment}>
      <h1>Meme Generator</h1>
      <Switch>
      <Route exact path='/'>
        <Meme />
      </Route>
      <Route path='/generated'>
        <MemeGenerated />
      </Route>
    </Switch>
    </div>
  );
}

