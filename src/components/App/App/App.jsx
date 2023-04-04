import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistic/Statistic';
import user from 'data/user.json';
import css from './App.module.css';
import data from 'data/data.json';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
};
