import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Article(props: any) {
  const tooldata = props.tooldata;
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ m: 3 }} />
        <Typography sx={{ textAlign: "center" }} variant="h3">
          {tooldata.articleTitle}{" "}
        </Typography>
        <Box sx={{ m: 4 }} />
        <Avatar
          sx={{ width: "10vh", height: "10vh" }}
          alt={tooldata.articleAuthor}
          src={tooldata.articleAuthorAvatar}
        ></Avatar>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ m: 1 }}></Box>
          <Typography variant="h5"> by {tooldata.articleAuthor}</Typography>
          <Box sx={{ m: 1 }}></Box>
        </div>
      </div>
      <Divider />

      {tooldata.article.map((paragraph: any, index: any) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <Box key={index} sx={{ m: 3 }}>
            <Card>
              <CardContent>
                <Box sx={[{ m: 3 }]} />
                {paragraph.t1 !== undefined && (
                  <Typography sx={{ fontWeight: 600 }} variant="h5">
                    {paragraph.t1}
                  </Typography>
                )}
                {paragraph.t2 !== undefined && (
                  <Typography sx={{ fontWeight: 800 }} variant="h6">
                    {paragraph.t2}
                  </Typography>
                )}
                <Box sx={{ m: 2 }} />
                <Typography variant="h6">{paragraph.p1}</Typography>
                {paragraph.p2 !== undefined && <Box sx={{ m: 2 }} />}
                {paragraph.p2 !== undefined && (
                  <Typography variant="h6">{paragraph.p2}</Typography>
                )}
              </CardContent>
            </Card>
          </Box>
        );
      })}
    </Box>
  );
}

export default Article;
