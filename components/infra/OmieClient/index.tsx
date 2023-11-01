import axios from 'axios';
import { Dict } from 'styled-components/dist/types';

export async function OmieClient(url: string, content: Dict){    
      return axios.post(
        `${url}?wsdl`,
        content,
        {
          headers:
            { 'Content-Type': 'application/json ' }
        }).then(res => {
          return res.data
        }).catch(err => {
          console.error(err)
          return err
        });
}