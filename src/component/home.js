import React from 'react';
import { useRecoilValue } from 'recoil';
import { NoteAtom } from './data';
import './home.css';

const Home = () => {
  const notes = useRecoilValue(NoteAtom);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Author</td>
            <td>Discription</td>
          </tr>
        </thead>
        {notes.map((note, index) => {
          return (
            <tbody>
              <tr key={index}>
                <td>{note.id}</td>
                <td>{note.title}</td>
                <td>{note.author}</td>
                <td>{note.disc}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export { Home };
