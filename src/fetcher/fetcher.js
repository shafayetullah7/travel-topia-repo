export const fetchDestinations = async () =>{
    const res = await fetch('http://localhost:5000/destinations');
    const data = await res.json();
    return data;
}