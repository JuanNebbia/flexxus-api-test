export class ArticleDTO {
  constructor(article) {
    this.id = article.id;
    this.name = article.name;
    this.brand = article.brand;
    this.status = article.status;
    this.updatedAt = article.updated_at;
  }

  static single(article) {
    return new ArticleDTO(article);
  }

  static array(articles) {
    return articles.map((article) => new ArticleDTO(article));
  }
}
