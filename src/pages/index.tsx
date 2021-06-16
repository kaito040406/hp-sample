import { GetStaticProps, NextPage } from "next"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import { Container, Grid, Typography } from "@material-ui/core"
import Slider from "../components/home/Slider"
import CarProductions from "../components/home/CarProductions"
import Introductions from "../components/home/Introductions"
import Posts from "../components/blog/Posts"
import PageTemplate from "../components/layouts/PageTemplate"
import theme from "../components/utils/theme"
import { fetchLatestPosts } from "../lib/api"
const useStyles = makeStyles(() => ({
  container: {
    marginTop: "3rem"
  }
}))
interface Item {
  name: string
  description: string
  color: string
}
interface Introduction {
  title: string
  description: string
  action: string
  href: string
}
interface Post {
  id: string
  title: string
  subTitle: string
  thumbnail: {
    url: string
  }
}
export const getStaticProps: GetStaticProps = async () => {
   const latestPosts = await fetchLatestPosts(3)
  // ↓↓↓ GASのデータを取得 ↓↓↓
  const gasResponse = await fetch('https://script.googleusercontent.com/a/macros/openstore-japan.com/echo?user_content_key=sTev1Q9rfvMc7ICgHSwxtEsYUUoF8Yzz27FGHt4KyClfRLR858zSfkvoKWypSfr0A_OH8nVA_O1KqcWH0MKagddIKN7QBPk8OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKCuCNZPgron24zL0ccQu1K9eWmiIA8ZDYnVfjz3uJKLFgiS03fmYssSev26ZZj0ToJOTSmTATNO7h9M9DdvFTUORQ4LDyMASd4yNmT8I0r343j1pSr0yN1QqtOkiNrUD--Zm55H2bZ6kw&lib=MWchBr-gBlJ40BegVQEvhAzHqxSiwjGVg')
  const gasDatas = await gasResponse.json()
  // ↑↑↑ GASのデータを取得 ↑↑↑
  // ↓↓↓ 取得したGASのデータ(gasDatas)をpropsで渡す ↓↓↓
  return {
    props: { latestPosts, gasDatas },
    revalidate: 1
  }
  // ↑↑↑ 取得したGASのデータ(gasDatas)をpropsで渡す ↑↑↑
}
const Home = ({ latestPosts, gasDatas }) => {
  const classes = useStyles()
  const items: Item[] = [
    {
      name: "Slide1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: "#64ACC8"
    },
    {
      name: "Slide2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: "#7D85B1"
    },
    {
      name: "Slide3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: "#CE7E78"
    }
  ]
  const introductions: Introduction[] = [
    {
      title: "Service",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      action: "About Service >",
      href: "/service"
    },
    {
      title: "Company",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      action: "About Company >",
      href: "/company"
    },
    {
      title: "Recruit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      action: "About Recruit >",
      href: "/recruit"
    }
  ]

  return (
    <>
      <ThemeProvider theme={theme}>
        <PageTemplate title="Home | Corporate Site Sample">
          <>
            <Slider
              items={items}
            />
​
              <Container maxWidth="lg" className={classes.container}>
              <Typography variant="h1" align="center" style={{ marginBottom: "2rem" }}>
                車リスト
              </Typography>
              {/* ↓↓↓ GASのデータをループ表示 ↓↓↓ */}
              <Grid container spacing={4}>
                {gasDatas.map((data, i) => (
                  <Grid item key={i} xs={12} sm={6} md={4}>
                    {/* <Grid container>
                      <h3>{data.title}</h3>
                      <a href={data.access} target="blank">
                        <img src={data.image} />
                      </a>
                    </Grid> */}
                    <CarProductions
                      title={data.title}
                      image={data.image}
                      access={data.access}
                    />
                  </Grid>
                ))}
              </Grid>
              {/* ↑↑↑ GASのデータをループ表示 ↑↑↑ */}
            </Container>
            
            { introductions.map((introduction, index) => (
              <Container key={index} maxWidth="lg" className={classes.container}>
                <Grid container justify={index % 2 == 0 ? "flex-start" : "flex-end"}>
                  <Grid item lg={6} md={6}>
                    <Introductions
                      index={index}
                      title={introduction.title}
                      description={introduction.description}
                      action={introduction.action}
                      href={introduction.href}
                    />
                  </Grid>
                </Grid>
              </Container>
              ))
            }
            <Container maxWidth="lg" className={classes.container}>
              <Typography variant="h1" align="center" style={{ marginBottom: "2rem" }}>
                Topics
              </Typography>
              <Grid container spacing={4}>
                {latestPosts?.map((post: Post) => (
                  <Grid item key={post.id} xs={12} sm={6} md={4}>
                    <Grid container>
                      <Posts
                        id={post.id}
                        title={post.title}
                        subTitle={post.subTitle}
                        thumbnail={post.thumbnail.url}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </>
        </PageTemplate>
      </ThemeProvider>
    </>
  )
}
export default Home