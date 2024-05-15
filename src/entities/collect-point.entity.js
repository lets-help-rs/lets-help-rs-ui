export default class CollectPoint {
  constructor(
    id,
    description,
    latitude,
    longitude,
    badReviews,
    goodReviews,
    createdAt,
    updatedAt,
    deletedAt
  ) {
    this.id = id;
    this.description = description;
    this.latitude = latitude;
    this.longitude = longitude;
    this.badReviews = badReviews;
    this.goodReviews = goodReviews;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }

  static make(data) {
    return new CollectPoint(
      data.id ?? "",
      data.description ?? "",
      data.latitude ?? 0,
      data.longitude ?? 0,
      data.badReviews ?? 0,
      data.goodReviews ?? 0,
      data.createdAt ?? "",
      data.updatedAt ?? "",
      data.deletedAt ?? ""
    );
  }
}
