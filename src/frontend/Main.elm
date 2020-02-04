module Main exposing (..)

import Browser
import Html exposing (Html, button, div, text)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)

main =
  Browser.sandbox { init = 0, update = update, view = view }

type Msg = Increment | Decrement

update msg model =
  case msg of
    Increment -> model + 1
    Decrement -> model - 1

view model =
  div []
    [ button [ class "pul-button", class "pul-button--primary", onClick Decrement ] [ text "-" ]
    , div [] [ text (String.fromInt model) ]
    , button [ classList [("pul-button", True), ("pul-button--primary", True)], onClick Increment ] [ text "+" ]
    ]
