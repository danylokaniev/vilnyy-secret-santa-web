import { VilnyyBank } from '../interfaces/vilnyy';

export async function getLatestVilnyyBanks(): Promise<VilnyyBank[]> {
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/vilnyy-bank`);
    const json = await response.json();
    return json ?? [];
  } catch (e) {
    console.error(e);
    return [];
  }
}
