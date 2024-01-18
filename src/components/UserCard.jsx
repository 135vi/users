import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function User({ user }) {
    return (
        <Card sx={{ width: 255, height: 125 }}>
            <CardContent>
              <h5>{ user.name }</h5>
              <p>{ user.email }</p>
            </CardContent>
          </Card>
    )
}