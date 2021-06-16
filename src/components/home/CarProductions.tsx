import { makeStyles, Theme } from "@material-ui/core/styles"
// import { Typography, Box, Button } from "@material-ui/core"
import Link from 'next/link'
import { Container, Grid } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  linkButton: {
    marginTop: theme.spacing(2),
    textTransform: "none",
    border: "transparent 1px solid",
    borderRadius: 50,
    backgroundColor: "#4F9DF7",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#4F9DF7"
    }
  }
}))

interface CarProductionsProps {
  title: string
  image: string
  access: string
}

const CarProductions = ({ title, image, access }: CarProductionsProps) => {
  const classes = useStyles()

  return (
    <>
      <Grid container>
        <h3>{title}</h3>
        <a href={access} target="blank">
          <img src={image} />
        </a>
      </Grid>
    </>
  )
}

export default CarProductions