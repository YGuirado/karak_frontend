import { useState } from 'react';
import styles from '../styles/Inventory.module.css';

function Home() {
  const [inventory, setInventory] = useState({
    w1: null,
    w2: null,
    k: null,
    s1: null,
    s2: null,
    s3: null, 
  });

  const handleClickKey = (id) => {
    if (inventory.k) {
      const replaceWeapon = new Promise((resolve, reject) => {
        const modal = document.createElement('div');
        modal.classList.add(styles.modal);

        const message = document.createElement('p');
        message.textContent = `You already have a key !`;

        const button1 = document.createElement('button');
        button1.textContent = 'Keep on floor';
        button1.onclick = () => {
          modal.remove();
          reject('You drop the object on the floor !');
        };
  
        modal.appendChild(message);
        modal.appendChild(button1);

        document.body.appendChild(modal);
      });

    }
    else {
      setInventory((prevInventory) => ({
        ...prevInventory, k: id,
      }))
    }
  }

  const handleClickWeapons = (id) => {
    if (inventory.w1 && inventory.w2) {
      const replaceWeapon = new Promise((resolve, reject) => {
        const modal = document.createElement('div');
        modal.classList.add(styles.modal);
  
        const message = document.createElement('p');
        message.textContent = `Which weapon do you want to replace?`;
  
        const button1 = document.createElement('button');
        button1.textContent = 'Replace Weapon 1';
        button1.onclick = () => {
          modal.remove();
          resolve('w1');
        };
  
        const button2 = document.createElement('button');
        button2.textContent = 'Replace Weapon 2';
        button2.onclick = () => {
          modal.remove();
          resolve('w2');
        };

        const button3 = document.createElement('button');
        button3.textContent = 'Keep on floor';
        button3.onclick = () => {
          modal.remove();
          reject('You drop the object on the floor !');
        };
  
        modal.appendChild(message);
        modal.appendChild(button1);
        modal.appendChild(button2);
        modal.appendChild(button3);
  
        document.body.appendChild(modal);
      });
  
      replaceWeapon.then((weaponToReplace) => {
        setInventory((prevInventory) => ({
          ...prevInventory,
          [weaponToReplace]: id,
        }));
      });
    } else if (!inventory.w1) {
      setInventory((prevInventory) => ({
        ...prevInventory,
        w1: id,
      }));
    } else if (!inventory.w2) {
      setInventory((prevInventory) => ({
        ...prevInventory,
        w2: id,
      }));
    }
  };

  const handleClickScroll = (id) => {
    if (inventory.s1 && inventory.s2 && inventory.s3) {
      const replaceScroll = new Promise((resolve, reject) => {
        const modal = document.createElement('div');
        modal.classList.add(styles.modal);
  
        const message = document.createElement('p');
        message.textContent = `Which scroll do you want to replace?`;
  
        const button1 = document.createElement('button');
        button1.textContent = 'Replace Scroll 1';
        button1.onclick = () => {
          modal.remove();
          resolve('s1');
        };
  
        const button2 = document.createElement('button');
        button2.textContent = 'Replace Scroll 2';
        button2.onclick = () => {
          modal.remove();
          resolve('s2');
        };

        const button3 = document.createElement('button');
        button3.textContent = 'Replace Scroll 3';
        button3.onclick = () => {
          modal.remove();
          resolve('s3');
        };

        const button4 = document.createElement('button');
        button4.textContent = 'Keep on floor';
        button4.onclick = () => {
          modal.remove();
          reject('You drop the object on the floor !');
        };
  
        modal.appendChild(message);
        modal.appendChild(button1);
        modal.appendChild(button2);
        modal.appendChild(button3);
        modal.appendChild(button4);
  
        document.body.appendChild(modal);
      });
  
      replaceScroll.then((scrollToReplace) => {
        setInventory((prevInventory) => ({
          ...prevInventory,
          [scrollToReplace]: id,
        }));
      });
    } else if (!inventory.s1) {
      setInventory((prevInventory) => ({
        ...prevInventory,
        s1: id,
      }));
    } else if (!inventory.s2) {
      setInventory((prevInventory) => ({
        ...prevInventory,
        s2: id,
      }));
    }
    else if (!inventory.s3) {
      setInventory((prevInventory) => ({
        ...prevInventory,
        s3: id,
      }));
    }
  };

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to KaraK <br/> Inventory & Encounter Test Camp
        </h1>
        <div className={styles.encounterContainer}>
          <div className={styles.meet}>
            <button>Find me someone</button>
          </div>
          <div className={styles.someoneAppair}>
            <span>Name: </span><br/>
            <span>Life: </span><br/>
            <span>Object: </span>
          </div>
        </div>
        <div className={styles.itemContainer}>
          <div>
            Weapons
            <div className={styles.weapons}>
              <button onClick={() => handleClickWeapons('w1')}>W1</button>
              <button onClick={() => handleClickWeapons('w2')}>W2</button>
              <button onClick={() => handleClickWeapons('w3')}>W3</button>
            </div>
          </div>
          <div>
            Key
            <div className={styles.weapons}>
              <button onClick={() => handleClickKey('k')}>K</button>
            </div>
          </div>
          <div>
            Scrolls
            <div className={styles.weapons}>
              <button onClick={() => handleClickScroll('s1')}>S1</button>
              <button onClick={() => handleClickScroll('s2')}>S2</button>      
           </div>
          </div>
        </div>
        <div className={styles.inventoryContainer}>
          <div id="W1" className={styles.invWeapons}>
            {inventory.w1 || ''}
          </div>
          <div id="W2" className={styles.invWeapons}>
            {inventory.w2 || ''}
          </div>
          <div id="K" className={styles.invKey}>
            {inventory.k || ''}
          </div>
          <div id="S1" className={styles.invScroll}>
            {inventory.s1 || ''}
          </div>
          <div id="S2" className={styles.invScroll}>
            {inventory.s2 || ''}
          </div>
          <div id="S3" className={styles.invScroll}>
            {inventory.s3 || ''}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;

