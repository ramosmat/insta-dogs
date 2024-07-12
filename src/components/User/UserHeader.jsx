import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');

  const location = useLocation();

  React.useEffect(() => {
    setTitle(location.pathname);

    switch (location.pathname) {
      case '/conta':
        setTitle('Minha Conta');
        break;
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;
      case '/conta/postar':
        setTitle('Poste sua foto');
        break;
      default:
        setTitle('Feed');
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
