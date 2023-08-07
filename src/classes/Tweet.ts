import { Base } from "./Base";
import { Like } from "./Like";

type TypeTweet = 'normal' | 'reply'

export class Tweet extends Base {
  private _content: string
  private _likes: Like[] = []
  private _replies: Tweet[] = []
  private _type: TypeTweet

  constructor(content: string,type: TypeTweet) {
    super();
    this._content = content
    this._type = type
  }

  public reply(reply: Tweet) {
    if (this._type === 'normal') {
      const replyTweet = new Tweet(reply.getContent(), 'reply')
      this._replies.push(replyTweet)
    } else {
      console.log('Não foi possivel dar reply')
    }
  }

  public like(like: Like) {
    this._likes.push(like)
   }

  //mostrar detalhe
  public show() {

    return {
      content: this._content,
      likes: this._likes
    }
  }

  //mostrar detalhe das respostas
  public showReplies() {
    return this._replies.map((reply) => reply.show())
   }
  
  // Getters para conteudo e tipo
  public getContent(): string {
    return this._content
  }

  public getType(): TypeTweet {
    return this._type
  }

}
