import css from './FriendList.module.css';

export  function FriendItem({ avatar, name, isOnline }) {
  return <li className={css.item}>
  <span className={css.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}>{ isOnline }</span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{ name }</p>
</li>
}