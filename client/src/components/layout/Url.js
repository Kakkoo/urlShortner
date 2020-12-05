import React, { Component } from "react";
import { connect } from "react-redux";
import { giveshorturl } from "../../actions/authActions";
class Url extends Component {
  constructor() {
    super();
    this.onLoad = this.onLoad.bind(this);
  }
  onLoad(e) {
    this.props.giveshorturl(
      this.props.match.params.shorturl,
      this.props.history
    );
  }
  render() {
    const { shorturl } = this.props.match.params;

    return (
      <div>
        <div>
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEA8TExAVFRUXFRUVFxcXFQ8PEhUSFREXFhUYGBUYHyggGBslHRUVITEhJSkrLi8uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAAAQcIBgIFAwT/xABMEAABAgMEBAgHDQYGAwAAAAABAAIDBDERIWFxBQdBsQYIEiVRVJPxInN0s8LR0hMVFzRygZGho7K00+EUIyQ1UsEWMjNCU2JDkqL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Au9LehD0KMB3IJJ2BCdm1RS4JTNBJNmaE2KKZpS81QTbZVLdpUYnuTEoJB2lAVFckrlvQSDbkltuSiuSYBBNvQhOwKMB3JS4IJJ2BCfpUUzSmJQSTYltlVFLzVMT3IJt2lAdpUYlK3miCQUBtyUVy3pXLegkG3JfnMTDWNc9zg1jQXOc4hrWtAtJJNwAG1JiO1jXOc4MY0FznEhrWtAtJJNwAG1Zu1r6y3T7jLSxLZNpxa6YcDc5wqGbQ05m+wND6msDXPHivfB0e4woItHu1n76Ji0H/AE2//WVFVM7pCPGdyo0aJEd0ve+I76XEr+ZEHQaA4a6Sk3NMCbiBo/2OcYsIjoMN1o+cWHFaH1ZaxoWk4ZY5ohzTBa+GD4L205cO2/k22Wiot21WWF9Lg3pmJJzcvMwj4UJ4dZTlNo9pwc0kfOg2epXP/wCMpH/mH1Ig+8TsCilwUk9FVFM0Cmar3hvrZkpB7oMMGZmBc5rHBsOGeh8S+/AA0vsTXRwvfISTYcF3JmJguY1wuMOG0fvHjoN7Wj5VuxZjJtQWlMa9tKFxLIEq0bAWRnkDE8sW/QF+fw56Wt/05Xsov5irBEFnnXnpa3/JK9lF/MR2vPS39Er2UX8xVgiCz3a89Lf0SvZRfzEOvPS39Er2UX8xVgiCz/hz0tZ/kleyi/mINeelrP8ATleyi/mKsEQWeNeelv8Ajleyi/mLtNXuuUTUZktOQmQokQhrIrC4QnPJ8FrmuJLSbgDab+hZ8XphNostBBusrbssxQbdpiUpear8pTle5wy//PyW8r5XJFv1r9cSgYnuTEpiUreaIFbzRK5b0rlvSuW9ArlvXiYjtY1znODGNBc5xIa1rQLSSTcABtSYjsYx7nODGNBc5ziGta1otJJNwAG1Zu1say3T7jLSxLJNpxa6Yc03OcNjAbw05m+wNBrY1lun3GWliWybTi10w4G5zhUMBvDfnN9gbWiIgIiICFF2Oq7gg/SM9DaW/uIRbEju/wBvIBtDM3EWWdFp2IP1/wAD6T/7fSi1VyR0D6EQCbM1FM1JNiil5qgznxio7jpSAwm5sqwgbAXRYlp+pv0KrFZ/GGt99ofksLzkVVgg+xwW4OTE/Mfs8vyeXyXP8N3IbyW2W3/OuxGpLTHRA7X9E1ADngeIi+itLVy3oM0jUlpjogdr+igaktMdEDtf0Wl65JgEGaBqS0x0QO1/RPgS0xbSB2v6LS+A7kpcEGaPgS0xbSB2v6IdSWmOiB2v6LS9M0pmgzSdSWmOiB2v6LtNX2pky0eHMz0Rj3Q3B0ODD5TmcsXtc9zgLbDfyQK2X7FcVLzVMSgYnuTEpiUreaIFbzRK5b0rlvSuW9ArlvXiYjtY1znODGNBc5xIa1rQLSSTcABtSYjsY1znODGNBc5ziGta0C0kk3AAbVm7WxrLdPuMtLEtk2nFrphwNznCoYCLQ35zfYGg1say3T7jLSxLZNpxa6YcDc5w2MBo35zfYG1oiICIiAiLpOA3A6Y0lMCFC8FjbDFikEshMJ+txvsbts2AEgHAbgdMaSmBCheCxthixSLWQmHe42Gxu3AAkam4McHpeRl2QJdnJY28k2F73mr3na4/VcBYAAnBjg9LyMuyBAZyWNvJNhe95F73na42fUALAAF9YX5b0Hq1ERB5N16jE9yk9JUYlBm/jDHnaH5LC85FVYKz+MMedofksLzkVVggsnUAOeG+Ii+itLVyWaNQA54HiIvorS+AQMAmA7kwHclLggUuCUzSmaUxKBTEpS81Sl5qmJQMT3JiUxKVvNECt5olct6Vy3pXLegVy3rxMR2sa5znBjGguc4kNa1oFpJJuAA2pMR2sa5znBjGguc4kNa1oFpJJuAA2rN2tjWW6fcZaWJbJtOLXTDgbnOFQwG8N+c32BoNa+st0+4y0sS2TacWumHA3OcKhm0NOZvsDa0REBERARF0nAbgdMaSmBChDksbYYsUi1kNn93G+xu3AAkA4DcDpjSUx7lC8FjbDFikWshMO9xsNjdtmwAkam4McHpeRl2QIDOSxt5JsL3vsve87XGzcBYAAnBjg9LSMuyBAZyWNvJN73vNXvO1x+q4CwABfVrlvQK5b1NtuSiuW9Tb0IPSKLFKDyRtKiuSkhRXLegzfxhnc7Q/JYXnIqrBWfxhjztD8lheciqsEFkagBzwPERfRWl8B3LNGoC334HiIvorS9LggUuCUzSmaUzQKZqveFesMaO0vBgTAtlosuxxcBa6DEMWI3lf9mEBtoqLLRtBsKl5qs68Yu33zl/JWeeioNEQYrXNa8ODmuALSCHNLSLQQRUEbV6xKzfql1mOkXNlZpxdKk+C69xl3E1A2w+kbKjaDo6DEa9rXtcHMIDmkEFrmkWggiosQeq3miVy3pXLelct6BXLevExHYxj3OcGMaC5znENa1rRaSSbgANqTEdrGuc5wYxoLnOJDWtaBaSSbgANqzdrY1lun3GWliWybTi10w4G5zhsYDRvzm+wNBrY1lun3GWliWSbTi10w5puc4bGA3hpzN9gbWiIgIiICIuk4DcDpjSUwIULwWNsMWKRayEw73Gw2N24AEgHAbgdMaSmBChDksbYYsUglkNn93G+xu3AAkam4McHpeRlmQIDOSxt5JsL3vsve87XGz5rgLAAE4McHpeRl2QIDOSxt5JsL3vNXvO1x+q4CwABfVrlvQK5b0rlvSuW9K3BArcFNuwKMB3KcAgmxSoUoPJFuSiuSk35KMAgzfxhrPfaH5LC85FVYKz+MMB77Q/JYXnIqrBBZGoC334HiIvorS9M1mjUAeeB4iL6K0vTEoFM0peapS81TEoGJWdeMXb75y/krPPRVorErOvGLPOcv5Kzz0VBVSs7VNrMdJObKzTi6UcbnXl0u4mo6YZNW7KjaDWKINuworXta5jg5jgCHNIc1zSLQQRUYqJiOxjHOc4MY0FznOIa1rQLSSTcABtWctU2sx0k5srNOJlHHwXXl0uSajphk1Gyo2g/nrY1lun3OlpYlso01va6YcDc53QzaG/Ob7A0GtjWW6fcZaWJbJtOLXTDgbnOFQwG8N+c32BtaIiAiIgIi6TgNwOmNJTHuULwWNsMWKRayEw73Gw2N22bACQDgNwOmNJTAhQhyWNsMWKQSyEwn63G+xu2zYASNTcGOD0vIy7IEBnJY28k2F73kXvedrjZ9QAsAATgxwel5GXZAgM5LG3kmwve+y97ztcbNwFgAC+rXLegVy3pXLelct6VuCBW4JgO5MB3JgEDAKRddtUUuFVIuzQekUKUHk9CjAdyknYFFLggzfxhhztD8lheciqsFZ/GGbztD8lheciqsEFk6gDzwPERfRWlqXmqzTqAPPA8RF9FaWxKBie5MSmJSt5ogVvNFnXjFu5zl/JWeeirRVct6zrxjDznL+Ss89FQVUiIgIiICIiAiLpOA3A6Y0lMCFCHJY2wxYpBLIbP7uNhsbtwAJAOA3A6Y0lMCFCHJY2wxYpFrIbP7uN9jduABI1NwY4PS0jLsgQGcljbyTe97zV7ztcfquAsAATgxwel5GWZAgM5LG3kmwve+y97ztcbPmuAsAAX1a5b0CuW9K5b0rlvStwQK3BMB3JgO5MAgYBKXCqmlKqKYlApiVIFlaqKXmqkDaUEqVClB5J2BRTNST9KimaDN/GGHO0PyWF5yKqwVn8YYc7Q/JYXnIqrBBZOoA88DxEX0VpbErNOoD+cDxEX0Vpat5ogVvNErlvSuW9K5b0CuW9Z14xh5zl/JWeeirRVbgs68Yyz3zl/JWeeioKqREQEREBERB0nAbgdMaSmPcoXgsbYYsUi1kJh3uNhsbtwAJGpuDHB6XkZdkCAzksbeSbC97zV7ztcfquAsAAVAaodYo0e/wDZpgD9liP5XKAHKgxCAOWbL3NuFoqLLR0HSUGK2I1rmuDmOAc0ghzXNItBBFQg9Vy3pXLelct6VuCBW4JgO5MB3JgEDALhdbXDg6MlWCEAZiMXNh8q8Ma0DlxCNtlrQB0nAhd1S4VVC8ZMfxGj7/8AxRfvtQVnMcLNJRIhiOn5jlE22iNFbZkAQG5BXJqW1kRpmKZKbf7pE5JdBimzlvDRa6G7+o2WkGtxtVBLs9TjrNOaP+VE/DxEGrMSpA2lRie5SL70E2qVFqlB5JsUUvNVJuvUYnuQZv4w1vvtD8lheciqsFZ/GGJ99ofksLzkVVggsnUAOeB4iL6K0tXLes06gBzw3xEX0VpauW9ArlvStwStwTAdyBgO5Z14xYHvnL+Ss89FWiqXBZ14xY5zl/JWeeioKqREQEREBERAVnaptZjpJzZWacXSjj4Lr3Ol3E1G0wyat2VG0GsUQbdhRWva1zHBzHAEOaQ5rmkWgtIuII2r1gO5Zv1TazXyLmys04ulHHwXXudLuJqNphna3ZUbQdHQorXNaWODmuAcHAhzS0i0EEVBQesAlLhVKXCqUxKBTNUJxkx/EaP8VE++1X3S81VCcZMH9o0f4qJ99qCm12ep08+aP+VE/DxFxi7PU7/PNH/Kifh4iDVlbypF+W9RXLeptty3oPSIiDyekqMSpI2lRW80QZv4wx52h+SwvORVWCs/jDHnaH5LC85FVYILI1ADngeIi+itL1uCzRqAHPA8RF9FaXwHcgYDuSlwSlwSmaBTNUxro4C6Rnp6DFloHujBAawn3SCzwxEiEixzgaOCuemJSl5qgyydUenOp/bS3todUenOp/bS3trU2JTEoMs/BHpzqf20t7aDVHpzqf20t7a1NW80SuW9Blkao9OdT+2lvbQao9OdT+2lvbWpq5b0rcEGWRqj051P7aW9tBqj051P7aW9tamwHcmAQZZ+CPTlvxP7aW9tWbqpktPSDhLTMoXyrj4J92lnOlydoHLtMM7WilRtBtmlwqlMSgUxKUvNUpeapiUDEqhOMnb+0aP8VE++1X3ie5UJxkz/ABGj/FRPvtQU2uz1OjnzR/yon4eIuMXZ6nRz3o/5UT8PEQasrlvU29Citwopt2BB6sRRYpQeSFFct6ki3JRXLegzfxhjztD8lheciqsFZ/GGI99ofksLzkVVggsjUB/OB4iL6K0vS4LNGoC334HiIvorS9M0CmaUxKUxKUvNUCl5qmJTEpiUDEpW80St5olct6BXLelct6Vy3pW4IFbgmA7kwHcmAQMAlLhVKXCqUxKBTEpS81Sl5qmJQMSmJ7kxPclbygVvKoTjJn+I0f4qJ99qvuuW9UJxk3fxGj/FRfvtQU2uz1OjnvR/yon4eIuMXZ6nRz3o/wCVE/DxEGrMApwCjAKaXIJUqFKDyRbkorcFJ6FGA7kGb+MNZ77Q/JYXnIqrBWjxiIRGlYJ2GVh2Y2RYoPz+tVcgsjUAeeB4iL6K0vTErIPAXhS/R02JlkJsQhjmclxLRY6y+0ZKwxr+mOoQu0iepBfdLzVMSqEGv6Yt+IQu0iepPh+mLfiELtInqQX3iUreaKhDr+mOoQu0iepHa/pjqELtInqQX3XLelct6oR2v6Z6hC7SJ6lJ1/TPUIXaRPUgvqtwTAdyoX4fpiz4hC7SJ6kGv6Ys+IQu0iepBfWASlwqqEGv6Y6hC7SJ6kbr+mOoQu0iepBfdMSlLzVUINf0x1CF2kT1INf0xb8QhdpE9SC+8SmJ7lQnw/TFvxCF2kT1Idf0x1CF2kT1IL7reUrlvVCO1/THUIXaRPUpdr+mOoQu0iepBfVct6oXjJn+J0f4qJ99qHX9M9QhdpE9S4fWFw4fpR8u98BsL3JrmgNc59vKINptGCDkl2ep3+d6P+VE/DxFxi7XUzDc7TkhYKGKT0ACXiINVUuFVIuzUUxKkXZoJUqFKDyTsCilwUk7Aopmgq3X3wUdMycOZhNLoktyi8C9zoDrC848kgHIuWclt8izEn61UPDvUpCjvdGkYjYL3El0FwPuBcf6CL4eVhHRYgz8i7ia1S6bYSP2LlD+psWXIP0vB+kL8jqr051B3aS3toOMRdn8FenOoO7SW9tBqr051B3aS3toOMRdmNVem+oO7SW9tBqr031B3aS3toOMRdmNVem+oO7SW9tPgr031B3aS3toOMRdmdVenOoO7SW9tDqr051B3aS3toOMRdmdVem+oO7SW9tDqr051B3aS3toOMRdmdVem+oO7SW9tPgr051B3aS3toOMRdmNVenOoO7SW9tBqr031B3aS3toOMRdmNVem+oO7SW9tBqr031B3aS3toOMRdn8FenOoO7SW9teoeqjTjnAfsJGcWWAA/8AdBxSvLi9cFnt910hEbYHNMKAD/uHK/ePy8ENB+UnA/UbyXtiaQitcBeIEIusd8uJdd0ho+dXVAgshsa1rQ1rQGta0BrWtAsDWgUAQe6ZqQNpUUvKkDaUEqURB5J+lRTNeioAsv2oIpeapiVIG0oBtKCMSlbzRTZbVLLct6CK5b0rlvUm/JD0IIrcEwHcpPQEwCCMAlLhVTSlUssxKCKYlKXmqkCy/agG0oIxKYnuUgbSlltUEVvKVy3qbLct6G/LegiuW9K3Cik9CHoCCMAmAU4BKUQRS4VSmJU2WYlALM0EUzSl5UgbSgG0oIxPcpF95Sy28pXJBNqlEQQilEEIVKIBREQFAUoggIpRAUKUQQilEEFCpRAREQAoClEEIpRBCKUQQpREEFSiIIREQf/Z"
            //src="../../img/Login.JS.png"
            alt=""
            placeholder="shortURL"
            name="shortURL"
            value={shorturl}
            onLoad={this.onLoad}
            width="0"
            height="0"
          ></img>
        </div>

        <div id="fullurl"></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { giveshorturl })(Url);
