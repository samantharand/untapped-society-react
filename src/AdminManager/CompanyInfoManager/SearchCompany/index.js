import React, { Component } from 'react';

export default class SearchCompany extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      results: []
    }
  }

  // api call to search
  fetchSearchResult = async (query) => {
    try {
      const url = process.env.REACT_APP_API_URL + "api/v1/companies/search?query=" + query;
      const res = await fetch(url, {
        credentials: 'include'
      });
      const json = await res.json();
      this.setState({ results: json.data})
    } catch (err) {
      console.error(err)
    }
  }

  handleChange = (e) => {
    const query = e.target.value;
    if (!query) {
      this.setState({ query, results: [] })
    } else {
      this.setState({ query }, () => {
        this.fetchSearchResult(query)
      });
    }
  }

  render() {
    const { query } = this.state;
    const results = this.state.results.map((result, key) => {
      return (
        <button 
        key={key}
        onClick={()=> this.props.selectCompany(result.id)}
        >{result.name}</button>
        )
    })
    console.log(this.state)
    return (
      <React.Fragment>
        <label>Search Company</label>
        <input 
        placeholder='Search company'
        name='query'
        value={query}
        onChange={this.handleChange}
        />
        <ol>{results}</ol>
      </React.Fragment>
    );
  }
}