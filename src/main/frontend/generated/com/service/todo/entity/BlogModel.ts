import { _getPropertyModel as _getPropertyModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NumberModel as NumberModel_1, ObjectModel as ObjectModel_1, StringModel as StringModel_1 } from "@vaadin/hilla-lit-form";
import type Blog_1 from "./Blog.js";
class BlogModel<T extends Blog_1 = Blog_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(BlogModel);
    get id(): NumberModel_1 {
        return this[_getPropertyModel_1]("id", (parent, key) => new NumberModel_1(parent, key, true, { meta: { annotations: [{ name: "jakarta.persistence.Id" }], javaType: "java.lang.Integer" } }));
    }
    get title(): StringModel_1 {
        return this[_getPropertyModel_1]("title", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.lang.String" } }));
    }
    get author(): StringModel_1 {
        return this[_getPropertyModel_1]("author", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.lang.String" } }));
    }
    get authorMail(): StringModel_1 {
        return this[_getPropertyModel_1]("authorMail", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.lang.String" } }));
    }
    get authorWebsite(): StringModel_1 {
        return this[_getPropertyModel_1]("authorWebsite", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.lang.String" } }));
    }
    get subtitle(): StringModel_1 {
        return this[_getPropertyModel_1]("subtitle", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.lang.String" } }));
    }
    get createdDate(): StringModel_1 {
        return this[_getPropertyModel_1]("createdDate", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.time.LocalDateTime" } }));
    }
    get data(): StringModel_1 {
        return this[_getPropertyModel_1]("data", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.lang.String" } }));
    }
}
export default BlogModel;
