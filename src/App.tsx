import './App.css'
import AutoComplete from './components/AutoComplete'

export default function App({ name }: { name: string }) {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <AutoComplete delay={1000} />
    </div>
  );
};
