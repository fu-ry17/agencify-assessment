import { useStore } from '@/store/featureStore';

const Sort = () => {
  const { country, state, setCountry, setState } = useStore()

  return (
    <div className='flex items-center gap-4'>
        <select 
          value={country} 
          onChange={e => setCountry(e.target.value)}
          className='p-2 bg-inherit rounded-md border'
        >
          <option value=""> Country </option>
          <option value="Morocco">Morocco (+212) </option>
          <option value="Mozambique">Mozambique (+258) </option>
          <option value="Uganda">Uganda (+256)</option>
          <option value="Ethiopia">Ethiopia (+251)</option>
          <option value="Cameroon">Cameroon (+237)</option>
        </select>
    

        <select 
          value={state} 
          onChange={e => setState(e.target.value)}
          className='p-2 bg-inherit rounded-md border'
        >
          <option value=""> State </option>
          <option value="valid">Valid</option>
          <option value="not valid">Not Valid</option>
        </select>

    </div>
  );
};

export default Sort
