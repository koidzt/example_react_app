import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserData from './components/UserData';

class App extends Component {
  state = {
    isShow: true,
    persons: [
      {
        name: 'Colby Gallagher',
        email: 'elit.pellentesque.a@pharetrafeliseget.co.uk',
        age: 39,
      },
      {
        name: 'Norman Britt',
        email: 'fringilla@tempor.ca',
        age: 68,
      },
      {
        name: 'Isaac Jacobs',
        email: 'eros.Proin@ametfaucibus.org',
        age: 25,
      },
      {
        name: 'Nolan Sosa',
        email: 'ipsum.Donec@molestieorci.co.uk',
        age: 75,
      },
      {
        name: 'Raphael Greer',
        email: 'parturient.montes.nascetur@faucibusleoin.ca',
        age: 29,
      },
      {
        name: 'Nehru Owens',
        email: 'in.sodales@Phaselluselitpede.org',
        age: 44,
      },
      {
        name: 'Lucas Mcgowan',
        email: 'Suspendisse.eleifend@congueInscelerisque.com',
        age: 66,
      },
      {
        name: 'Todd Reed',
        email: 'ac.urna.Ut@liberodui.net',
        age: 14,
      },
      {
        name: 'Zephania Mejia',
        email: 'posuere@Donecporttitortellus.org',
        age: 94,
      },
      {
        name: 'Ryan Orr',
        email: 'ipsum.Suspendisse@ettristiquepellentesque.net',
        age: 90,
      },
      {
        name: 'Louis Pate',
        email: 'lectus.rutrum.urna@Donecdignissim.net',
        age: 78,
      },
      {
        name: 'Hoyt Noble',
        email: 'vitae@Quisque.net',
        age: 35,
      },
      {
        name: 'Emmanuel Peterson',
        email: 'ut.sem@pharetranibh.com',
        age: 43,
      },
      {
        name: 'Thor Reid',
        email: 'aliquet.vel@vestibulummassa.org',
        age: 1,
      },
      {
        name: 'Herrod Dickerson',
        email: 'id.erat.Etiam@Aliquamerat.org',
        age: 31,
      },
      {
        name: 'Gavin Martinez',
        email: 'dictum@Donectempor.org',
        age: 38,
      },
      {
        name: 'Warren Flowers',
        email: 'parturient.montes.nascetur@Maurisvel.ca',
        age: 69,
      },
      {
        name: 'Plato Parsons',
        email: 'in@auctornunc.com',
        age: 48,
      },
      {
        name: 'Caldwell Keller',
        email: 'massa.non@nuncac.ca',
        age: 81,
      },
      {
        name: 'Lev Ward',
        email: 'erat@pretiumetrutrum.com',
        age: 42,
      },
      {
        name: 'Richard Prince',
        email: 'dui@felis.co.uk',
        age: 90,
      },
      {
        name: 'Callum Petersen',
        email: 'bibendum.ullamcorper.Duis@ultricies.net',
        age: 35,
      },
      {
        name: 'Lawrence Morin',
        email: 'pellentesque.eget@Quisquepurus.edu',
        age: 90,
      },
      {
        name: 'Ishmael Patterson',
        email: 'Donec@ligulaAliquamerat.edu',
        age: 19,
      },
      {
        name: 'Solomon Day',
        email: 'mauris.ut.mi@sitamet.com',
        age: 1,
      },
      {
        name: 'Jack Wiley',
        email: 'ac.sem.ut@dui.ca',
        age: 40,
      },
      {
        name: 'Ralph Jarvis',
        email: 'nec.malesuada@duiaugue.edu',
        age: 76,
      },
      {
        name: 'Burton Salas',
        email: 'et.arcu.imperdiet@leoMorbineque.edu',
        age: 54,
      },
      {
        name: 'Kyle Marshall',
        email: 'laoreet.posuere.enim@blanditatnisi.net',
        age: 28,
      },
      {
        name: 'Emmanuel Guerra',
        email: 'Duis.dignissim.tempor@sodalesnisimagna.org',
        age: 55,
      },
      {
        name: 'Kelly Rowe',
        email: 'semper.rutrum.Fusce@acturpisegestas.com',
        age: 79,
      },
      {
        name: 'Abel Anderson',
        email: 'mi.felis@convallisestvitae.com',
        age: 54,
      },
      {
        name: 'Lars Huber',
        email: 'felis.purus@anteiaculisnec.org',
        age: 30,
      },
      {
        name: 'Reece Farmer',
        email: 'felis@auctorvitae.edu',
        age: 65,
      },
      {
        name: 'Yardley Roman',
        email: 'Donec@vulputate.net',
        age: 7,
      },
      {
        name: 'Elmo Gray',
        email: 'accumsan.laoreet@euismodurnaNullam.edu',
        age: 96,
      },
      {
        name: 'Gage Moore',
        email: 'posuere@Proinultrices.ca',
        age: 97,
      },
      {
        name: 'Warren Landry',
        email: 'facilisis.facilisis.magna@consequatdolor.co.uk',
        age: 17,
      },
      {
        name: 'Brock Harvey',
        email: 'eget.massa@dolor.ca',
        age: 38,
      },
      {
        name: 'Baker Henderson',
        email: 'Fusce.diam@odio.com',
        age: 49,
      },
      {
        name: 'Jackson Sellers',
        email: 'vitae.odio.sagittis@nascetur.net',
        age: 74,
      },
      {
        name: 'Honorato Thompson',
        email: 'erat.Etiam@ipsum.co.uk',
        age: 42,
      },
      {
        name: 'Kermit Barrett',
        email: 'Donec.tempor@euismodac.edu',
        age: 1,
      },
      {
        name: 'Ulric Blair',
        email: 'eu.arcu@eratEtiamvestibulum.ca',
        age: 2,
      },
      {
        name: 'Boris Cunningham',
        email: 'Proin.velit.Sed@liberoDonec.net',
        age: 97,
      },
      {
        name: 'Cadman Diaz',
        email: 'non@etliberoProin.edu',
        age: 22,
      },
      {
        name: 'Cain Franco',
        email: 'scelerisque@Integersemelit.ca',
        age: 99,
      },
      {
        name: 'Owen Griffin',
        email: 'tempus.eu@sit.org',
        age: 84,
      },
      {
        name: 'Jonah Joyce',
        email: 'dignissim@Phasellusinfelis.edu',
        age: 93,
      },
      {
        name: 'Patrick Clark',
        email: 'vitae.semper@justosit.net',
        age: 74,
      },
      {
        name: 'Dante Sykes',
        email: 'orci.sem.eget@tristiquesenectus.edu',
        age: 57,
      },
      {
        name: 'Talon Horne',
        email: 'massa@Vivamussit.ca',
        age: 79,
      },
      {
        name: 'Gray Wise',
        email: 'Proin@CrasinterdumNunc.net',
        age: 43,
      },
      {
        name: 'Gavin Levy',
        email: 'sit@maurissit.com',
        age: 36,
      },
      {
        name: 'Damian Howell',
        email: 'Vestibulum.accumsan.neque@pellentesque.ca',
        age: 24,
      },
      {
        name: 'Palmer Cross',
        email: 'id.nunc@dictumeleifendnunc.edu',
        age: 69,
      },
      {
        name: 'Driscoll Fischer',
        email: 'orci.Donec.nibh@nuncid.ca',
        age: 85,
      },
      {
        name: 'Zachary Wiggins',
        email: 'auctor.Mauris.vel@inaliquet.edu',
        age: 48,
      },
      {
        name: 'Gil Ayala',
        email: 'ligula.Aenean.gravida@urnaUttincidunt.net',
        age: 91,
      },
      {
        name: 'Josiah Langley',
        email: 'ipsum.nunc.id@Cum.org',
        age: 27,
      },
      {
        name: 'Price Burton',
        email: 'sollicitudin.orci@feugiattelluslorem.co.uk',
        age: 57,
      },
      {
        name: 'Allistair Mcguire',
        email: 'sem.elit@natoque.edu',
        age: 63,
      },
      {
        name: 'Macaulay Fitzpatrick',
        email: 'mi@morbitristiquesenectus.edu',
        age: 67,
      },
      {
        name: 'Hu Davidson',
        email: 'pellentesque.massa@pedePraesenteu.ca',
        age: 52,
      },
      {
        name: 'Valentine Heath',
        email: 'ornare.Fusce.mollis@inlobortis.co.uk',
        age: 68,
      },
      {
        name: 'Brady Macias',
        email: 'Cras.vehicula.aliquet@ipsumprimis.ca',
        age: 42,
      },
      {
        name: 'Lionel Alvarado',
        email: 'vitae.nibh@vestibulumloremsit.ca',
        age: 6,
      },
      {
        name: 'Yuli Edwards',
        email: 'quis.diam.luctus@Vivamuseuismod.ca',
        age: 21,
      },
      {
        name: 'Trevor Vance',
        email: 'placerat@musAenean.net',
        age: 69,
      },
      {
        name: 'Elmo Mccoy',
        email: 'Aliquam.nisl@afacilisis.com',
        age: 81,
      },
      {
        name: 'Hall Mcmahon',
        email: 'dolor@ligulaeu.co.uk',
        age: 34,
      },
      {
        name: 'Asher Santana',
        email: 'nunc@vulputateullamcorpermagna.org',
        age: 91,
      },
      {
        name: 'Kadeem Avila',
        email: 'lorem.tristique.aliquet@tellus.ca',
        age: 78,
      },
      {
        name: 'Xavier Hall',
        email: 'viverra.Donec@arcu.net',
        age: 4,
      },
      {
        name: 'Cadman Zamora',
        email: 'Aenean@velitQuisquevarius.ca',
        age: 60,
      },
      {
        name: 'Joel Prince',
        email: 'Nulla.eu.neque@Nullamsuscipit.com',
        age: 8,
      },
      {
        name: 'Graiden Meyers',
        email: 'mauris.sapien.cursus@Nunc.ca',
        age: 57,
      },
      {
        name: 'Arsenio Griffith',
        email: 'consectetuer.adipiscing@adipiscinglacus.com',
        age: 83,
      },
      {
        name: 'Brady May',
        email: 'hendrerit@mi.edu',
        age: 62,
      },
      {
        name: 'Aristotle Neal',
        email: 'luctus@at.ca',
        age: 83,
      },
      {
        name: 'Rigel Dawson',
        email: 'ac.fermentum@eu.net',
        age: 21,
      },
      {
        name: 'Jamal Sharp',
        email: 'Nunc.ac@arcu.net',
        age: 75,
      },
      {
        name: 'Knox Bentley',
        email: 'mollis.non@Phasellusnulla.co.uk',
        age: 61,
      },
      {
        name: 'Jackson Bryan',
        email: 'commodo@lectusquismassa.ca',
        age: 81,
      },
      {
        name: 'Aristotle Wilder',
        email: 'commodo.ipsum.Suspendisse@mi.edu',
        age: 78,
      },
      {
        name: 'Jermaine Prince',
        email: 'Nulla@velitinaliquet.org',
        age: 64,
      },
      {
        name: 'Paki Poole',
        email: 'eget.varius.ultrices@Proin.com',
        age: 32,
      },
      {
        name: 'Hashim Spence',
        email: 'Integer@mollis.ca',
        age: 49,
      },
      {
        name: 'Jack Lawson',
        email: 'dolor.Donec.fringilla@tinciduntorci.net',
        age: 2,
      },
      {
        name: 'Malik Reilly',
        email: 'Ut.tincidunt@facilisiSedneque.com',
        age: 33,
      },
      {
        name: 'David Cash',
        email: 'at.iaculis@pedeSuspendissedui.net',
        age: 70,
      },
      {
        name: 'Ali Gregory',
        email: 'porttitor.interdum@tristiquealiquet.co.uk',
        age: 74,
      },
      {
        name: 'Alexander Alexander',
        email: 'senectus@tortornibhsit.ca',
        age: 27,
      },
      {
        name: 'Marsden Austin',
        email: 'magna@diam.edu',
        age: 92,
      },
      {
        name: 'Logan Mccormick',
        email: 'natoque.penatibus.et@egetvenenatisa.com',
        age: 19,
      },
      {
        name: 'Sawyer Mason',
        email: 'quam.elementum.at@anteipsumprimis.org',
        age: 7,
      },
      {
        name: 'Barclay Stokes',
        email: 'aliquet.vel@sed.ca',
        age: 37,
      },
      {
        name: 'Ivan Meyer',
        email: 'Sed.nunc.est@Pellentesquehabitant.ca',
        age: 79,
      },
      {
        name: 'Gareth Fuller',
        email: 'pretium.neque@MorbivehiculaPellentesque.com',
        age: 64,
      },
      {
        name: 'Henry Weber',
        email: 'Suspendisse.commodo@mauriseuelit.ca',
        age: 45,
      },
    ],
  };
  setName = (name) => {
    this.setState({ announcement: name });
  };

  render() {
    const personList = this.state.persons;
    const isShow = this.state.isShow; //เหมือนกับ const {isShow} = this.state;
    return (
      <div className="App">
        <input value={this.state.announcement} onChange={(e) => this.setState({ announcement: e.target.value })} />
        <h1>{this.state.announcement}</h1>
        <div style={{ textAlign: 'left', width: '90%', margin: 'auto' }}>
          <b>Note Action</b>
          <p>onClick : change color row</p>
          <p>onDoubleClick : hide row</p>
        </div>
        <table style={{ margin: 'auto', width: '90%', fontSize: '24px' }}>
          <thead>
            <tr style={{ background: 'Orange' }}>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Announcement</th>
            </tr>
          </thead>
          <tbody>
            {isShow &&
              personList
                // .filter(person => person.name[0] === "A")
                .map((person, idx) => (
                  <UserData
                    key={idx}
                    id={idx}
                    name={person.name}
                    email={person.email}
                    age={person.age}
                    setName={this.setName}
                  />
                ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
