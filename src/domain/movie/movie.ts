export class Movie {

  private constructor(
    public title: MovieTitle,
    public description: MovieDescription,
    public image: MovieImage,
    public isFavorite: boolean,
  ) {
  }

  public static fromRecord(record: MovieRecord): Movie {
    return new Movie(
      MovieTitle.fromString(record.title),
      MovieDescription.fromString(record.description),
      MovieImage.fromString(record.image),
      record.isFavorite,
    );
  }

  public toRecord(): MovieRecord {
    return {
      title: this.title.toString(),
      description: this.description.toString(),
      image: this.image.toString(),
      isFavorite: this.isFavorite,
    }
  }

  public toggleFavorite(){
    this.isFavorite = !this.isFavorite;
  }

}

export interface MovieRecord {
  title: string,
  description: string;
  image: string;
  isFavorite: boolean;
}


class MovieTitle {

  private constructor(
    private title: string
  ) {
    if (!title) throw Error('movie name is empty');
  }

  public static fromString(title: string) {
    return new MovieTitle(title);
  }

  public toString() {
    return this.title;
  }
}

class MovieDescription {

  private constructor(
    private description: string
  ) {
    if (!description) throw Error('movie description is empty');
  }

  static fromString(description: string) {
    return new MovieDescription(description);
  }

  public toString() {
    return this.description;
  }

}

class MovieImage {

  private constructor(
    private image: string
  ) {
    if (!image) throw Error('movie image is empty');
  }

  static fromString(image: string) {
    return new MovieImage(image);
  }

  public toString() {
    return this.image;
  }

}
