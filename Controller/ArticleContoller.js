const fs = require("fs");
const path = require("path");

const ArticlePath = path.resolve(__dirname, "../Module/Article.json");

const Article = JSON.parse(fs.readFileSync(ArticlePath));

exports.GetPosts = (req, res) => {
  res.status(200).json(Article);
};

exports.CreatePost = (req, res) => {
  const NewID = Article[Article.length - 1].source.id + 1;
  const NewData = Object.assign({ source: { id: NewID } }, req.body);

  Article.push(NewData);

  fs.writeFile(ArticlePath, JSON.stringify(Article), (err) => {
    res.status(201).json([NewData]);
  });
};

exports.GetPost = (req, res) => {
  const ID = req.params.id;
  const RegID = new RegExp(`${ID}`, "gi");
  const GetData = Article.filter((data) => data.title.match(RegID));

  let Now = new Date();

  if (!GetData || !isNaN(ID)) {
    return res.send([
      {
        source: { id: "" },
        author: "CO-OP",
        title: "ERROR: 404",
        description: "Page Not Found",
        imageurl:
          "https://i1.sndcdn.com/avatars-000528563730-0shn93-t500x500.jpg",
        published: `${Now.toLocaleString()}`,
      },
    ]);
  }

  res.status(200).json(GetData);
};

exports.UpdatePost = (req, res) => {
  const Exis_ID = ~~req.params.id;
  const Body = req.body;
  const ObjPost =
    Article[Article.findIndex((data) => data.source.id === Exis_ID)];

  if (!ObjPost || ObjPost <= 0 || isNaN(Exis_ID)) {
    return;
  }

  for (inkey in Body) {
    for (key in ObjPost) {
      if (key === inkey && Body[inkey].length !== 0) {
        ObjPost[key] = Body[inkey];
      }
    }
  }

  fs.writeFile(ArticlePath, JSON.stringify(Article), () => {
    res.status(200).json([ObjPost]);
  });
};

exports.DeletePost = (req, res) => {
  const Exis_ID = ~~req.params.id;
  const Data = Article.findIndex((data) => data.source.id === Exis_ID);

  if (!Data || Data <= 0 || isNaN(Exis_ID)) {
    return;
  }

  const DeletedArticle = Article.splice(Data, 1);

  fs.writeFile(ArticlePath, JSON.stringify(Article), (err) => {
    res.send(DeletedArticle);
  });
};
