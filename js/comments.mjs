const {acorn, acornLoose, doctrine} = window.browserify

const getFile = async url => await (await fetch(url)).text()

function onComment(block, text, start, end){
  console.log(doctrine.parse("/*" + text + "*/", {unwrap: true}))
}

function onToken(token){
  if (token.type.keyword == "import"){
    console.log(token);
  }
}

const getCodeComments = code => {
  return acorn.parse(code, {onComment, sourceType: "module", onToken});
}


const getFileURLComments = async url => {
  const mainFile = await getFile(url);
  getCodeComments(mainFile)
}


export {getCodeComments};
export {getFileURLComments};
