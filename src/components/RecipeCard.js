import React from "react"
import { Link, useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Delete, Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";

//idea: show recipe image on home page,
//and show details when hovered.

const RecipeCard = (props) => {
  const navigate = useNavigate();

  let overview = { title: 'Unnamed Recipe', desc: 'No Description' }
  if (props.recipe.overview) overview = props.recipe.overview;
  if (props.recipe.overview.title === '') overview.title = 'Unnamed Recipe'

  return (
    <Card
      sx={{ height: 200, minWidth: 250, maxWidth: 250 }}
      elevation={10}
      onClick={() => { if (!props.editable) navigate(`/view/${props.recipe.id}`) }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 20, fontWeight: 600 }} noWrap>{overview.title}</Typography>
        <Typography>{overview.desc}</Typography>
      </CardContent>
      {props.editable ?
        <CardActions disableSpacing className="card-actions">
          <Link to={`/create/${props.recipe.id}`}>
            <IconButton>
              <Edit />
            </IconButton>
          </Link>
          <IconButton onClick={() => { props.onDelete(props.recipe.id) }}>
            <Delete />
          </IconButton>
        </CardActions>
        : null
      }
    </Card>
  )
}

export default RecipeCard